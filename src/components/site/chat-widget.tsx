import { useCallback, useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Link } from "@tanstack/react-router";
import { MessageSquareText, X, BadgeCheck, RefreshCw } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { cn } from "@/lib/utils";

const GREETING = `Hi — I'm the Shyena assistant. I can answer questions about the platform, Vera, Chakra and Nexus, the evaluation model, pricing, services, and how we test conversational and voice AI agents.

What would you like to explore?`;

const SUGGESTIONS = [
  "What is Shyena?",
  "Vera, Chakra or Nexus?",
  "How does the evaluation work?",
  "Pricing",
  "The integrity gate",
  "Book a demo",
];

function textOf(parts: { type: string; text?: string }[]) {
  return parts
    .map((part) => (part.type === "text" && part.text ? part.text : ""))
    .join("");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { messages, sendMessage, status, error, stop, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  const focusInput = useCallback(() => {
    window.setTimeout(() => textareaRef.current?.focus(), 60);
  }, []);

  useEffect(() => {
    if (open) focusInput();
  }, [open, focusInput]);

  useEffect(() => {
    if (status === "ready") focusInput();
  }, [status, focusInput]);

  const ask = useCallback(
    (text: string) => {
      const trimmed = text.trim().slice(0, 1000);
      if (!trimmed || busy) return;
      void sendMessage({ text: trimmed });
      focusInput();
    },
    [busy, sendMessage, focusInput],
  );

  const handleSubmit = (message: PromptInputMessage, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(message.text ?? "");
    event.currentTarget.reset();
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Shyena assistant" : "Chat with the Shyena assistant"}
        aria-expanded={open}
        className={cn(
          "fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-all hover:brightness-110",
          open && "scale-90 opacity-0 pointer-events-none",
        )}
      >
        <MessageSquareText className="h-4 w-4" />
        Chat with us
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Shyena assistant"
          className="fixed inset-x-3 bottom-3 z-[60] flex max-h-[85dvh] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-elevated sm:inset-x-auto sm:right-5 sm:bottom-5 sm:h-[640px] sm:max-h-[calc(100dvh-2.5rem)] sm:w-[400px]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <img src="/shyena-icon.png" alt="" aria-hidden="true" className="h-8 w-auto" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">Shyena Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online · typically replies instantly
              </p>
            </div>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={() => setMessages([])}
                aria-label="Start a new chat"
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Escalation strip */}
          <div className="flex justify-end border-b border-border bg-secondary/50 px-4 py-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:brightness-110"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Talk to the expert team
            </Link>
          </div>

          {/* Transcript */}
          <Conversation className="flex-1">
            <ConversationContent className="gap-4 p-4">
              <Message from="assistant">
                <MessageContent>
                  <MessageResponse>{GREETING}</MessageResponse>
                </MessageContent>
              </Message>

              {messages.map((message) => (
                <Message key={message.id} from={message.role === "user" ? "user" : "assistant"}>
                  <MessageContent>
                    <MessageResponse>{textOf(message.parts)}</MessageResponse>
                  </MessageContent>
                </Message>
              ))}

              {status === "submitted" && (
                <Message from="assistant">
                  <MessageContent>
                    <Shimmer>Checking the Shyena knowledge base…</Shimmer>
                  </MessageContent>
                </Message>
              )}

              {error && (
                <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  Something went wrong reaching the assistant. Try again, or{" "}
                  <Link to="/contact" className="underline underline-offset-2">
                    contact the team
                  </Link>
                  .
                </p>
              )}

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => ask(suggestion)}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          {/* Composer */}
          <div className="border-t border-border p-3">
            <PromptInput onSubmit={handleSubmit}>
              <PromptInputTextarea
                ref={textareaRef}
                placeholder="Ask about Shyena…"
                maxLength={1000}
              />
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={status} disabled={busy && status !== "streaming"} onStop={stop} />
              </PromptInputFooter>
            </PromptInput>
            <p className="mt-2 text-center text-[11px] leading-relaxed text-muted-foreground">
              Answers cover Shyena only. Chat isn't stored — closing this tab clears it. For deep
              technical or commercial detail, our team will reach out.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

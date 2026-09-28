import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route=createFileRoute("/customers")({beforeLoad:()=>{throw redirect({to:"/design-partners",statusCode:301});}});
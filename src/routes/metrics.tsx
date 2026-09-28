import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route=createFileRoute("/metrics")({beforeLoad:()=>{throw redirect({to:"/platform",statusCode:301});}});
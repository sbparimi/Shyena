import { createFileRoute } from "@tanstack/react-router";
import { AutonomousQACinematicDemo } from "@/components/site/autonomous-qa-cinematic-demo";

export const Route = createFileRoute("/demo")({
  head:()=>({
    meta:[
      {title:"Autonomous QA Execution | Shyena"},
      {name:"description",content:"Interactive cinematic autonomous QA execution visualization."},
      {property:"og:title",content:"Autonomous QA Execution | Shyena"},
      {property:"og:description",content:"Interactive cinematic autonomous QA execution visualization."},
      {property:"og:url",content:"https://www.shyena.eu/demo"},
    ],
    links:[{rel:"canonical",href:"https://www.shyena.eu/demo"}],
  }),
  component:()=> <AutonomousQACinematicDemo/>,
});

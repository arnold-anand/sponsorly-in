import HomePage from "@/components/landing-page/HomePage";
import "./globals.css";
import SmFeatureCards from "@/components/landing-page/feature-cards/SmFeatureCards";
import QuestionsComponent from "@/components/landing-page/questions/QuestionsComponent";
import OurServices from "@/components/landing-page/our-services/OurServices";
import Description from "@/components/landing-page/our-services/Description";



export default function Home() {
  return (
    <div>
      <HomePage></HomePage>
      <SmFeatureCards></SmFeatureCards>
      <QuestionsComponent></QuestionsComponent>
      <OurServices></OurServices>
      <Description></Description>
      
    </div>
  );
}

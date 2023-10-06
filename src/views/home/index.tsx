import HomeAbout from "./about";
import HomeElaborate from "./elaborate";
import HomeFooter from "./footer";
import HeroSection from "./hero";
import HomeIntegration from "./integration";
import HomeNavbar from "./navbar";
import HomeObjectives from "./objectives";

export default function HomeView() {
  return (
    <main>
      <HomeNavbar />
      <HeroSection />
      <HomeObjectives />
      {/* <HomeAbout /> */}
      <HomeElaborate
        title={"Privacy"}
        subtitle={
          "Anonymity would allow users to express themselves without fear of personal repercussions or judgment based on their identity."
        }
        img_url={"./images/world.png"}
      />
      <HomeElaborate
        title={"Security"}
        subtitle={
          "Your statements are saved on a decentralized platform where your thoughts and opinions cannot be altered or brought down by any system"
        }
        img_url={"./images/block.png"}
      />

      <HomeElaborate
        title={"Freedom of Speech"}
        subtitle={
          "People might feel more comfortable sharing diverse opinions and engaging in open discussions if their identities were protected."
        }
        img_url={"./images/secure_chat.png"}
      />
      <HomeIntegration />
      <HomeFooter />
    </main>
  );
}

import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-teal-500  py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            alt="logo"
            src={Logo}
            style={{ width: "150px", height: "auto" }}
          />
          <p className="my-5">
            "Welcome to our online learning platform. We're dedicated to
            providing top-notch education tailored to your needs. With expert
            instructors and diverse courses, we're here to help you thrive. Join
            us and start your journey toward success today."
          </p>
          <p>© Learnify All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Abot US</p>
          <p className="my-5">learnifyStudentService123@gmail.com</p>
          <p>learnifyFacebookstudent2.com</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">23/A Scentury Road,</p>
          <p className="my-5">Marvin Mawatha,Negambo,</p>
          <p className="my-5">Sri Lanka.</p>
          <p>(112)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

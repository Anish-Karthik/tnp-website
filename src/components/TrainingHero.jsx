import Carousel from "./TrainingHeroCarousel";

const TrainingHero = () => {
  return (
    <div className="lg:m-12 sm:m-8 m-6">
      <h1 className="lg:w-3/5 lg:text-4xl md:w-2/3 sm:w-full sm:text-3xl w-full text-2xl leading-8 mb-4 font-title">Matching Industry Standards with High Grade Student Trainings</h1>
      <div className="grid lg:grid-rows-2 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-2 grid-cols-1 grid-rows-6 gap-4">
        <div>
          <Carousel />
        </div>
        <div className="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#CCC6FF] bg-[#EEECFF]">
          <div className="w-14 h-14 bg-[#A488F0] p-4 flex items-center justify-center rounded-full">
            <img src="/stacks.svg" alt="stack-of-books-icon" />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl font-title font-normal">Aptitude Training</h2>
          <p className="lg:text-base md:text-sm text-[#475467] text-sm">
            The main objective of this program is to make students employable by providing them training on aptitude skills and soft skills. Under this, we conduct various mock activities like
            Aptitude test, Group discussion and personal interviews and more!
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#FEDF89] bg-[#FFFAEB]">
          <div className="w-14 h-14 bg-[#FEC84B] p-4 flex items-center justify-center rounded-full">
            <img src="/users.svg" alt="users-icon" />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl font-title font-normal">Student Development Program</h2>
          <p className="lg:text-base md:text-sm text-[#475467] text-sm">
            The main objective is to enhance students overall personality and to make them aware about the latest updates and hands-on experience of latest technology. It gives an exposure of company
            work culture.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#FECDCA] bg-[#FEF3F2]">
          <div className="w-14 h-14 bg-[#F97066] p-4 flex items-center justify-center rounded-full">
            <img src="/workshop.svg" alt="teacher-using-a-stick-to-teach-on-board-icon" />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl font-title font-normal">Career Development Training</h2>
          <p className="lg:text-base md:text-sm text-[#475467] text-sm">
            Campus training focuses on corporate ethics and etiquettes, resume writing and interview skills so that students can get an exposure to industry work culture, ethics and etiquettes
            followed in the corporate sector. It also provide guidance regarding interviews.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#A6F4C5] bg-[#ECFDF3]">
          <div className="w-14 h-14 bg-[#32D583] p-4 flex items-center justify-center rounded-full">
            <img src="/handshake.svg" alt="handshake-icon" />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl font-title font-normal">Campus Connect Programme - Infosys</h2>
          <p className="lg:text-base md:text-sm text-[#475467] text-sm">
            This program provides an opportunity for all students to enhance their technical knowledge and it helps to test the students on their capability to understand the problem and to provide
            solution through written test, assignments and projects.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#B2DDFF] bg-[#EFF8FF]">
          <div className="w-14 h-14 bg-[#84CAFF] p-4 flex items-center justify-center rounded-full">
            <img src="/book-open.svg" alt="open-book-icon" />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl font-title font-normal">Industry Oriented Workshop</h2>
          <p className="lg:text-base md:text-sm text-[#475467] text-sm">
            The main aim of conducting industry oriented workshops is to bridge the gap between University curriculum and the practices in industry fields. The workshop covers wide variety of domains
            such as Information Technology, Computer Engineering and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingHero;

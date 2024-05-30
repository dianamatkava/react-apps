import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="body">
      <Accordion />
    </div>
  );
}

interface Faq {
  key: number;
  title: string;
  text: string;
  number: number;
  // onOpenFaq: (el: number) => void;
}

const AccordionItem1: React.FC<Faq> = ({ title, text, number }) => {
  const [isHidden, setIsOpen] = useState(true);
  return (
    <>
      <div
        className={`item ${isHidden ? "" : "open"}`}
        onClick={() => setIsOpen((el) => !el)}
      >
        <p className="number">{number}</p>
        <p className="title">{title}</p>
        <p className="icon">{isHidden ? "+" : "-"}</p>
        <div className="content-box" hidden={isHidden}>
          {text}
        </div>
      </div>
    </>
  );
};

interface Faq2 {
  key: number;
  title: string;
  number: number;
  isHidden: boolean;
  children: JSX.Element;
  handleOpenFaq: (el: number) => void;
  // onOpenFaq: (el: number) => void;
}

const AccordionItem2: React.FC<Faq2> = ({
  title,
  number,
  isHidden,
  children,
  handleOpenFaq,
}) => {
  return (
    <>
      <div
        className={`item ${isHidden ? "" : "open"}`}
        onClick={() => handleOpenFaq(number)}
      >
        <p className="number">0{number + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isHidden ? "+" : "-"}</p>
        <div className="content-box" hidden={isHidden}>
          {children}
        </div>
      </div>
    </>
  );
};

function Accordion() {
  const [openedFaq, setOpenFaq] = useState<number | null>(null);

  function handleOpenFaq(el: number) {
    setOpenFaq((state) => (state === el ? null : el));
  }

  return (
    <div className="accordion">
      <div className="content-box">
        <h2>FAQ.v1</h2>
        <ul>
          {faqs.map((faq, index) => (
            <AccordionItem2
              key={index}
              text={faq.text}
              title={faq.title}
              number={index}
              isHidden={openedFaq === index ? false : true}
              handleOpenFaq={handleOpenFaq}
            >
              <p>{faq.text}</p>
            </AccordionItem2>
          ))}
        </ul>
      </div>
      <div className="content-box">
        <h2>FAQ.v2</h2>
        <ul>
          {faqs.map((faq, index) => (
            <AccordionItem1
              key={index}
              text={faq.text}
              title={faq.title}
              number={++index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

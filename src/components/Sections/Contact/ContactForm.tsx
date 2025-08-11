import { FC, useRef } from 'react';

const ContactForm: FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = 'youremail@example.com'; // Replace with your email
    const name = nameRef.current?.value || '';
    const message = messageRef.current?.value || '';

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form
      className="grid min-h-[200px] grid-cols-1 gap-y-4"
      onSubmit={handleSend}
    >
      <input
        className={inputClasses}
        name="name"
        placeholder="Name"
        required
        type="text"
        ref={nameRef}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        placeholder="Message"
        required
        rows={6}
        ref={messageRef}
      />
      <button
        aria-label="Submit contact form"
        className="justify-self-end w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

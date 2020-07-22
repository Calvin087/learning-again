import React, { useState } from "react";
import Mailchimp from "react-mailchimp-form";

const TheContactForm = () => {
  const url =
    "https://torramedia.us17.list-manage.com/subscribe/post?u=7ab2e599c6b37b8f3c2276d68&amp;id=cdd3801777";
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(url, {
      method: "post",
      body: data,
    });
    setSuccess(true);
    document.getElementById("myform").reset();
  }

  return (
    <div>
      <form id="myform" onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="FNAME" className="-mt-2">
          Name:
        </label>
        <input
          id="mce-FNAME"
          name="FNAME"
          type="text"
          className="mb-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight"
        />

        <label htmlFor="email">Email:</label>
        <input
          id="mce-EMAIL"
          name="EMAIL"
          type="email"
          className="mb-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight"
        />

        <label htmlFor="MESSAGE">Message:</label>
        <textarea
          id="mce-MESSAGE"
          name="MESSAGE"
          type="text"
          className="mb-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight"
        />

        <button
          style={{
            backgroundImage: `url("../images/button-150-50.png")`,
            width: "150px",
            height: "50px",
          }}
          className="text-white mt-4 hover:bg-black"
        >
          Send Message<span className="text-red-500"> _</span>
        </button>

        {success === true ? (
          <div className="my-4 p-2 rounded-lg border-2 border-green-300 bg-green-100 text-green-700">
            Your message has been sent
          </div>
        ) : null}

        <div id="mce-responses">
          <div id="mce-error-response" style={{ display: "none" }}></div>
          <div id="mce-success-response" style={{ display: "none" }}></div>
        </div>

        {/*<!-- real people should not fill this in and expect good things - do not remove this or risk bot signups-->*/}

        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_7ab2e599c6b37b8f3c2276d68_cdd3801777"
            tabIndex="-1"
            value=""
          />
        </div>
      </form>
    </div>
  );
};

export default TheContactForm;

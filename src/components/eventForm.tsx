import "./eventForm.css";

export default function EventForm() {
  return (
    <>
      <h1 className="header">Meetup Event Posting Portal</h1>
      <form className="form">
        <label htmlFor="">
          Event Name
          <input type="text" value="" />
        </label>
        <label htmlFor="">
          Description
          <input type="text" value="" />
        </label>
        <label htmlFor="">
          Event Date
          <input type="date" value="" />
        </label>
        <label htmlFor="">
          Event Time
          <input type="time" value="" />
        </label>
        <h2>Post to which groups?</h2>
        <label htmlFor="">
          20s & 30s
          <input type="checkbox" value="" />
        </label>
        <label htmlFor="">
          Fun & Adventure
          <input type="checkbox" value="" />
        </label>
        <label htmlFor="">
          Can scale as many groups as necessary
          <input type="checkbox" value="" />
        </label>
        <button>Submit Event!</button>
      </form>
    </>
  );
}

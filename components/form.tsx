import type { NextPage } from "next";

 const Form: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5 bg-blue-500 focus-within:bg-blue-300">
      <input
        type="text"
        required
        placeholder="Username"
        className="border p-1 peer border-gray-400 rounded-md placeholder-shown:bg-teal-300"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input is invalid
      </span>
      {/* <span className="hidden peer-valid:block peer-valid:text-teal-500">
        Awesome username
      </span> */}
      <span className="hidden peer-hover:block peer-hover:text-amber-500">
        Hello
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Form
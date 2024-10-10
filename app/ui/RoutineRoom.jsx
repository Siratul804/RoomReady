import { addRoutine } from "@/app/lib/actions";

function RoutineRoom({ user }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action={addRoutine}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Routine
        </h2>

        <input
          type="number"
          name="uap_id"
          value={user.uap_id}
          required
          className="hidden"
        />
        <input
          type="number"
          placeholder="Batch No."
          name="Batch"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />

        <select
          name="Section"
          id="section"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          required
        >
          <option value="">Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>

        <input
          type="text"
          placeholder="Room No."
          name="RoomNumber"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Started Time"
          name="StartedTime"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="End Time"
          name="EndTime"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />

        <button
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RoutineRoom;

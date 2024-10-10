"use client";
import { addUser } from "@/app/lib/actions";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action={addUser}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-royal-blue-600">
          Sign Up
        </h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">UAP ID</label>
          <input
            type="number"
            placeholder="UAP ID"
            name="uap_id"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue-600 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue-600 focus:border-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue-600 focus:border-transparent"
          />
        </div>

        {/* Is Admin Dropdown */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue-600 focus:border-transparent"
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#4169e1] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#24366d] transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Dashboard;

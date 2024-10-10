async function RoomAva({ data }) {
  return (
    <>
      <main className="p-5">
        <h1 className="text-2xl font-bold text-center mt-10">
          Check Room Availability
        </h1>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Batch
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Section
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Room Number
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Started Time
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  End Time
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr key={index} className="transition-colors duration-200">
                  <td className="py-3 px-4 border-b text-gray-800">
                    {val.Batch}
                  </td>
                  <td className="py-3 px-4 border-b text-gray-800">
                    {val.Section}
                  </td>
                  <td className="py-3 px-4 border-b text-gray-800">
                    {val.RoomNumber}
                  </td>
                  <td className="py-3 px-4 border-b text-gray-800">
                    {val.StartedTime}
                  </td>
                  <td className="py-3 px-4 border-b text-gray-800">
                    {val.EndTime}
                  </td>
                  <td
                    className={`py-3 px-4 border-b ${
                      val.Status === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {val.Status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default RoomAva;

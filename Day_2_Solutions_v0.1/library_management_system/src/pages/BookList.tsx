import { useState, type ReactElement } from "react";
import * as BookData from "../data/bookslist.json";

interface bookDataTemplate {
  author: string;
  id: number;
  title: string;
}

const BookList = (): ReactElement => {
  let [view, setView] = useState<boolean>(true);
  let processedData = JSON.stringify(BookData);
  let allData = JSON.parse(processedData);
  let finalData: bookDataTemplate[] = allData.data;

  let first50BookData = finalData.slice(0, 50);

  console.log(first50BookData);

  return (
    <div className="place-items-center">
      <div className="flex">
        <div className="m-8 font-bold">Book List</div>
        <div>
          <button
            className="m-6 px-2 py-2 pt-2 pb-2 bg-blue-500 text-white rounded-xl"
            onClick={() => {
              setView(!view);
            }}
          >
            {view ? "Hide" : "View"}
          </button>
        </div>
      </div>
      {view ? (
        <div>
          <table className="min-w-full text-left text-sm font-light text-surface border-3">
            <tr>
              <th className="px-30 py-4 border-r-3 bg-gray-300">Book ID</th>
              <th className="px-30 py-4 border-r-3 bg-gray-300">Book Name</th>
              <th className="px-30 py-4 bg-gray-300">Author Name</th>
            </tr>

            {first50BookData.map((ele, idx) => {
              let color = idx % 2 != 0 ? "bg-gray-300" : "bg-gray-100";
              return (
                <tr key={idx}>
                  <td className={`px-30 py-4 border-r-3 ${color}`}>{ele.id}</td>
                  <td className={`px-30 py-4 border-r-3 ${color}`}>
                    {ele.title}
                  </td>
                  <td className={`px-30 py-4 border-r-3 ${color}`}>
                    {ele.author}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <p>Click button to view list</p>
      )}
    </div>
  );
};

export default BookList;

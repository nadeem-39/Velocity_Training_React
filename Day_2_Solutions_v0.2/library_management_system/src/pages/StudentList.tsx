import { useState, type ReactElement } from "react";
import * as SutdentData from "../data/studentsList.json";

type StudentDataTemplate = {
  id: number;
  title: string;
  age: number;
};

const StudentList = (): ReactElement => {
  let [view, setView] = useState<boolean>(true);

  let processedData = JSON.stringify(SutdentData);
  let allData = JSON.parse(processedData);
  let finalData: StudentDataTemplate[] = allData.data;

  let first50SutdentData = finalData.slice(0, 50);

  let [studentVisible, setStudentVisible] =
    useState<StudentDataTemplate | null>(null);

  const showStudentDetails = (id: number, title: string, age: number): void => {
    setStudentVisible({ id, title, age });
    console.log(studentVisible);
  };

  //   console.log(first50SutdentData);
  return (
    <div className="place-items-center">
      <div className="flex">
        <div className="m-8 font-bold">Student List</div>
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
        <>
          <div>
            {studentVisible && (
              <div className="border-3 p-20 bg-white fixed top-4/12 left-140 z-50">
                <p className="font-black text-lg">Student Information</p>
                <div className="pt-4">
                  <p className="font-bold">
                    Student ID: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    &nbsp; {studentVisible.id}
                  </p>
                  <p className="font-bold">
                    Student Name: &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    {studentVisible.title}{" "}
                  </p>
                  <p className="font-bold">
                    Student Age: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    {studentVisible.age}{" "}
                  </p>
                </div>
                <button
                  className="mt-10 px-5 py-5 pt-2 pb-2 bg-blue-500 text-white rounded-xl"
                  onClick={() => {
                    setStudentVisible(null);
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <div>
            <table className="min-w-full text-left text-sm font-light text-surface border-3">
              <thead>
                <tr>
                  <th className="px-30 py-4 border-r-3 bg-gray-300">
                    Student ID
                  </th>
                  <th className="px-30 py-4 border-r-3 bg-gray-300">
                    Student Name
                  </th>
                  <th className="px-30 py-4 bg-gray-300">Age</th>
                </tr>
              </thead>
              <tbody>
                {first50SutdentData.map((ele, idx) => {
                  let color = idx % 2 != 0 ? "bg-gray-300" : "bg-gray-100";
                  return (
                    <tr
                      key={idx}
                      onClick={() =>
                        showStudentDetails(ele.id, ele.title, ele.age)
                      }
                    >
                      <td className={`px-30 py-4 border-r-3 ${color}`}>
                        {ele.id}
                      </td>
                      <td className={`px-30 py-4 border-r-3 ${color}`}>
                        {ele.title}
                      </td>
                      <td className={`px-30 py-4 border-r-3 ${color}`}>
                        {ele.age}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Click button to view Student List</p>
      )}
    </div>
  );
};

export default StudentList;

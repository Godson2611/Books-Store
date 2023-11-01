/** @format */

import { Link } from "react-router-dom";
import { FaInfoCircle, FaPen, FaTrash } from "react-icons/fa";

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2 text-center'>
      <thead>
        <tr className='text-white bg-sky-600'>
          <th className='py-2'>No</th>
          <th>Title</th>
          <th className='hidden md:table-cell'>Author</th>
          <th className='hidden md:table-cell'>Publish Year</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-10 text-sky-800'>
            <td className='border border-slate-700 rounded-md'>{index + 1}</td>
            <td className='border border-slate-700 rounded-md'>{book.title}</td>
            <td className='border border-slate-700 rounded-md hidden md:table-cell'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md hidden md:table-cell'>
              {book.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <FaInfoCircle className='text-2xl text-blue-500' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <FaPen className='text-2xl text-yellow-500' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <FaTrash className='text-2xl text-red-500' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;

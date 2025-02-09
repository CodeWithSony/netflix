import React from "react";
import DataTable from "react-data-table-component";
import dataTableStyles from "../../styles/dataTableStyles";
import { useEffect, useState } from "react";
import { PencilIcon, XCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import { useRouter } from "next/router";
import axios from "axios";

const router = useRouter();

const { id } = router.query; // Get the movie ID from the URL

const DeleteMovie = () => {
  interface RowData {
    _id: string;
    name: string;
    singer: string[];
    cast: string[];
    releaseDate: string;
    budget: number;
  }

  const [movies, setMovies] = useState<RowData[]>([]);
  const [isExpenceLoading, setisExpenceLoading] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`/api/movies?id=${id}`);
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const DATE_FORMATS = {
    DAY_MONTH_YEAR: "DD-MM-YYYY",
  };

  const formatCurrancy = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const columns = [
    {
      name: "Movie Name",
      selector: (row: RowData) => row.name,
      sortable: true,
      wrap: true,
      cell: (row: RowData) => <span className="text-left">{row.name}</span>,
    },
    {
      name: "Singer",
      selector: (row: RowData) => row.singer.join(", "), //
      sortable: true,
      cell: (row: RowData) => (
        <span className="text-left">{row.singer.join(", ")}</span>
      ),
    },
    {
      name: "Cast",
      selector: (row: RowData) => row.cast.join(", "), //
      sortable: true,
      cell: (row: RowData) => (
        <span className="text-left">{row.cast.join(", ")}</span>
      ),
    },
    {
      name: "Release Date",
      selector: (row: RowData) =>
        moment(row.releaseDate).format(DATE_FORMATS.DAY_MONTH_YEAR),
      sortable: true,
      wrap: true,
      cell: (row: RowData) => (
        <span className="text-left">
          {moment(row.releaseDate).format(DATE_FORMATS.DAY_MONTH_YEAR)}
        </span>
      ),
    },
    {
      name: "Budget",
      sortable: true,
      right: true,
      wrap: true,
      cell: (row: RowData) => (
        <span className="text-left">{formatCurrancy(row.budget)}</span>
      ),
    },
    {
      name: "Actions",
      selector: (row: RowData) => row._id,
      cell: (row: RowData) => (
        <div className="flex flex-col sm:flex-row gap-2 text-xs">
          <button
            className="flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300 
                             hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 
                             transition-colors duration-200 flex items-center justify-center"
            onClick={() => handleEdit(row._id)}
          >
            <PencilIcon className="mr-1 text-green-500 h-7 w-8" />
          </button>

          <button
            className="flex-1 sm:flex-auto min-w-[40px] px-2 py-1 bg-white text-gray-800 rounded-md border border-gray-300 
                             hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 
                             transition-colors duration-200 flex items-center justify-center"
            onClick={() => handleDelete(row._id)}
          >
            <TrashIcon className="mr-1 text-red-500 h-8 w-8" />
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/movies?id=${id}`);

      if (response.status === 200) {
        setMovies(movies.filter((movie) => movie._id !== id));
      } else {
        alert("Failed to delete movie.");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Error deleting movie. Please try again.");
    }
  };

  const handleEdit = (id: string) => {
    console.log("edting..", id);
    // console.log("Router:", router);

    router.push(`/edit/${id}`);
    // console.log("Router:", router);
  };

  const fetchMovies = async () => {
    try {
      const res = await fetch("/api/movies");
      if (res.ok) {
        const data = await res.json();
        setMovies(data);
      } else {
        setError("Failed to load movies.");
      }
    } catch (error) {
      setError("Error fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mx-3 p-4 bg-white rounded-lg    ">
      <h1 className="text-xl font-semibold text-blue-900">Expenses</h1>
      <DataTable
        columns={columns}
        data={movies}
        pagination
        paginationServer
        responsive
        customStyles={dataTableStyles}
        progressPending={isExpenceLoading}
        // paginationTotalRows={totalRows}
        // onChangePage={handlePageChange}
        // onChangeRowsPerPage={handlePerRowsChange}
        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
      />
    </div>
  );
};

export default DeleteMovie;

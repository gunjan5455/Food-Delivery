import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CircleX, SquarePen } from "lucide-react";
const List = ({ url }) => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  //   const url = "http://localhost:4000";
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${url}/api/food/food/`);
      console.log(res);
      setItems(res.data.data);
    } catch (error) {
      toast.error("Failed to load data.");
    }
  };

  const handleDelete = async (id) => {
    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this item?"
    // );
    // if (!confirmDelete) return;
    try {
      const res = await axios.delete(`${url}/api/food/food/${id}`);
      //console.log("Delete response:", res); // debug response
      if (res.data.success) {
        toast.success("Deleted successfully");
        setItems(items.filter((item) => item._id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (err) {
      //console.error("Delete error:", err); // debug error
      toast.error("Error deleting item");
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Foods List</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Delete</th>
              <th className="px-4 py-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3 text-green-600">${item.price}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => {
                      setDeleteId(item._id);
                      setShowModal(true);
                    }}
                    className="text-red-500 hover:text-red-400 text-sm"
                  >
                    <CircleX size={22} />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="text-blue-500 hover:text-blue-400 text-sm"
                  >
                    <SquarePen size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md text-center relative transition-all duration-300">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Are you sure?
              </h3>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete this item? <br />
                This action cannot be undone.
              </p>
              <div className="flex w-full gap-2 pt-2">
                <button
                  onClick={() => {
                    handleDelete(deleteId);
                    setShowModal(false);
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-400 text-white py-2 rounded-lg text-sm font-medium cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 py-2 rounded-lg text-sm font-medium cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;

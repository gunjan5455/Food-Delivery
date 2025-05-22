import React, { useEffect, useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const url = "http://localhost:4000";
  const [image, setImage] = useState({ file: null, preview: null });
  const [originalData, setOriginalData] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/api/food/food/${id}`);
        const item = res.data.data;

        if (!item) {
          toast.error("Item not found.");
          return;
        }

        setOriginalData(item);
        setData({
          name: item.name || "",
          description: item.description || "",
          price: item.price || "",
          category: item.category || "salad",
        });
        setImage({
          file: null,
          preview: `${url}/images/${item.image}`,
        });
      } catch (err) {
        toast.error("Failed to fetch item data.");
      }
    };

    fetchData();
  }, [id]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onUpdateHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = key === "price" ? Number(data[key]) : data[key];
      formData.append(key, value);
    });

    if (image.file) {
      formData.append("image", image.file);
    }

    try {
      // Debug form data
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const res = await axios.put(`${url}/api/food/food/${id}`, formData);

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Update error");
    }
  };

  return (
    <form className="flex items-center flex-col" onSubmit={onUpdateHandler}>
      <h2 className="text-xl font-semibold mb-4">Update Item</h2>

      {image.preview ? (
        <div className="mt-4">
          <img
            src={image.preview}
            alt="Preview"
            className="w-40 h-26 object-cover rounded"
          />
        </div>
      ) : (
        <label className="hover:scale-105 border border-dashed border-gray-400 w-40 h-26 flex flex-col items-center justify-center text-gray-500 cursor-pointer mb-6">
          <Upload className="w-6 h-6 mb-1" />
          <span className="text-sm">Upload</span>
          <input
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </label>
      )}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Product Id</label>
        <input
          disabled
          value={id}
          className="border px-2 py-1 w-90 h-10 cursor-not-allowed"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Product name</label>
        <input
          onChange={onChangeHandler}
          value={data.name}
          name="name"
          className="border px-2 py-1 w-90 h-10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Product description</label>
        <textarea
          onChange={onChangeHandler}
          value={data.description}
          name="description"
          rows="4"
          className="border px-2 py-1 resize-none w-90"
        ></textarea>
      </div>

      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={data.category}
            onChange={onChangeHandler}
            className="border px-2 py-1 w-43 h-10"
          >
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="pasta">Pasta</option>
            <option value="sushi">Sushi</option>
            <option value="taco">Taco</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drinks</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium">Price</label>
          <input
            onChange={onChangeHandler}
            value={data.price}
            name="price"
            className="border px-2 py-1 w-43 h-10"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!originalData}
        className="bg-orange-500 text-white px-4 py-1 h-10 rounded-lg w-30 hover:bg-orange-400 hover:scale-105 disabled:opacity-50"
      >
        UPDATE
      </button>
    </form>
  );
};

export default Update;

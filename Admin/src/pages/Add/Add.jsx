import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Upload } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = ({ url, isLogged }) => {
  const navigate = useNavigate();
  //   const url = "http://localhost:4000";
  const [image, setImage] = useState({ file: null, preview: null });
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        file: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    if (image.file) {
      formData.append("image", image.file);
    }
    const response = await axios.post(`${url}/api/food/food`, formData);
    console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage({ file: null, preview: null });
    } else {
      toast.error(`Somthing went wrong!`);
    }
  };
  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, []);

  return (
    <form className="flex items-center flex-col" onSubmit={onSubmitHandler}>
      <h2 className="text-xl font-semibold mb-4 ">Upload Image</h2>

      {/* Image Upload Box */}

      {image.preview ? (
        <div className="mt-4">
          <img
            src={image.preview}
            alt="Preview"
            className="w-40 h-26 object-cover rounded"
          />
        </div>
      ) : (
        <label className=" hover:scale-105 border border-dashed border-gray-400 w-40 h-26 flex flex-col items-center justify-center text-gray-500 cursor-pointer mb-6">
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

      {/* Product Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Product name</label>
        <input
          onChange={onChangeHandler}
          value={data.name}
          type="text"
          name="name"
          placeholder="Type here"
          className="border px-2 py-1 w-90 h-10"
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Product description</label>
        <textarea
          onChange={onChangeHandler}
          value={data.description}
          placeholder="Write content here"
          name="description"
          rows="4"
          className="border px-2 py-1 resize-none w-90"
        ></textarea>
      </div>
      <div className="mb-4 flex gap-4">
        {/* Product Category */}
        <div className="flex-1">
          <label className="block mb-1 font-medium">Product category</label>
          <select
            onChange={onChangeHandler}
            name="category"
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

        {/* Product Price */}
        <div className="flex-1">
          <label className="block mb-1 font-medium">Product price</label>
          <input
            onChange={onChangeHandler}
            value={data.price}
            type="text"
            name="price"
            placeholder="$20"
            className="border px-2 py-1 w-43 h-10"
          />
        </div>
      </div>
      {/* Submit Button */}

      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-1 h-10 rounded-lg w-30 cursor-pointer hover:bg-orange-400 hover:scale-105"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;

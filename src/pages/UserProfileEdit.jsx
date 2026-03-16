import { useState } from "react";

const UserProfileEdit = () => {

  const [user, setUser] = useState({
    name: "Aman Tiwari",
    email: "amantiwari8861@gmail.com",
    image: ""
  });

  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    setUser((prev) => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated User:", user);

    alert("Profile Updated!");
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-xl rounded-2xl border">

      <h1 className="text-3xl font-bold text-center mb-8">
        Edit Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Image Preview */}
        <div className="flex justify-center">
          <img
            src={
              preview ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">
            Profile Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Update Profile
        </button>

      </form>
    </div>
  );
};

export default UserProfileEdit;

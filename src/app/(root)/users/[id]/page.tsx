import React from "react";

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <div className="flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mt-4">John Doe</h2>
        <p className="text-gray-600 text-center mt-2">Software Engineer</p>
        <div className="mt-6">
          <h3 className="text-lg font-medium">About Me</h3>
          <p className="text-gray-600 mt-2">
            Passionate developer with experience in web and mobile applications.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium">Contact Information</h3>
          <p className="text-gray-600 mt-2">Email: john.doe@example.com</p>
          <p className="text-gray-600 mt-1">Phone: (123) 456-7890</p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

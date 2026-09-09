import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/goals", {
        title,
        content,
      });

      toast.success("Goal created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating Goal", error);
      if (error.response?.status === 429) {
        toast.error("Slow down! You're creating Goals too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create Goal");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Goals
          </Link>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Goal</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4 flex flex-col justify-center gap-2">
                  <label className="label">
                    <span className="label-text text-lg font-bold">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Goal Title"
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4 flex flex-col justify-center gap-2">
                  <label className="label">
                    <span className="label-text text-lg font-bold">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your Goal here..."
                    className="textarea textarea-bordered h-36 w-full resize-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating..." : "Create Goal"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
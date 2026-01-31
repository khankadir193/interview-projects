import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function CrudAppApi() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  // 🔹 READ
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10))); // limit for simplicity
  }, []);

  // 🔹 CREATE
  const createPost = async () => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body: "demo body", userId: 1 })
    });
    const newPost = await res.json();

    setPosts([newPost, ...posts]); // optimistic update
    setTitle("");
  };

  // 🔹 UPDATE
  const updatePost = async () => {
    await fetch(`${API_URL}/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });

    setPosts(posts.map(p =>
      p.id === editingId ? { ...p, title } : p
    ));

    setEditingId(null);
    setTitle("");
  };

  // 🔹 DELETE
  const deletePost = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Simple CRUD App</h3>

      <input
        value={title}
        placeholder="Enter title"
        onChange={e => setTitle(e.target.value)}
      />

      {editingId ? (
        <button onClick={updatePost}>Update</button>
      ) : (
        <button onClick={createPost}>Add</button>
      )}

      <hr />

      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: 10 }}>
          <b>{post.title}</b>
          <br />
          <button onClick={() => {
            setEditingId(post.id);
            setTitle(post.title);
          }}>
            Edit
          </button>
          <button onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

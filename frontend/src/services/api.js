const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const fetchPortfolioData = async () => {
  try {
    // We fetch all data in parallel for speed
    const [projectRes, skillRes, generalRes] = await Promise.all([
      fetch(`${API_BASE_URL}/projects`),
      fetch(`${API_BASE_URL}/skills`),
      fetch(`${API_BASE_URL}/general`)
    ]);

    const projects = await projectRes.json();
    const skills = await skillRes.json();
    const general = await generalRes.json();

    return { projects, skills, general };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
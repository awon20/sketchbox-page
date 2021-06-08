import React, { useState } from "react";

function useFullPageLoader() {
  const [loadings, setLoading] = useState(false);
  return (
    loadings ? <useFullPageLoader /> : null,
    () => setLoading(true), // Show Loader
    () => setLoading(false) // Hide Loader
  );
}

export default useFullPageLoader;

import { Box } from "@mui/material";
import React from "react";

function Map() {
  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <iframe
          className="maps"
          title="bermuda-nails"
          width="400"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Hamburg%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
        <iframe
          className="maps"
          title="bermuda-nails"
          width="350"
          height="350"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Hamburg%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
        <iframe
          className="maps"
          title="bermuda-nails"
          width="300"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Hamburg%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </Box>
    </div>
  );
}

export default Map;

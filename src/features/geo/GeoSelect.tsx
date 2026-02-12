import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Geo, GEO_OPTIONS } from "../../app/config/geo";

export function GeoSelect({
  geo,
  onChange,
}: {
  geo: Geo;
  onChange: (geo: Geo) => void;
}) {
  return (
    <FormControl size="small" sx={{ minWidth: 180 }}>
      <InputLabel>Geo</InputLabel>
      <Select
        label="Geo"
        value={geo}
        onChange={(e) => onChange(e.target.value as Geo)}
      >
        {GEO_OPTIONS.map((x) => (
          <MenuItem key={x.value} value={x.value}>
            {x.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

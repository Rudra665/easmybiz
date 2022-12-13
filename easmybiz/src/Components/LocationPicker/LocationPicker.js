// import * as React from 'react';
// import TextField from '@mui/material/TextField';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
export default function LocationPicker() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Location}
      sx={{ width: 300,marginInline:"2vh" }}
      renderInput={(params) => <TextField {...params}  label={<LocationOnSharpIcon/>} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Location = [
  { label: 'Manali', index: "1"  }]
//   { label: '', index: "2"  },
//   { label: '', index: "3"  },
//   { label: '', index: "4"  },
//   { label: '', index: "5"  },
//   { label: '', index: "6"  },
  
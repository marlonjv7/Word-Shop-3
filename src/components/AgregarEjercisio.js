import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import {useForm} from "../hooks/useForm"
import {FileUpload} from "../helpers/FileUpload"
import { useDispatch } from 'react-redux';
import {addEjercisioASync} from "../redux/actions/actionEjercisios"


function MyFormHelperText() {

  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>.</FormHelperText>;
}

export default function AgregarEjercisio() {

  const dispatch = useDispatch()

    const  [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        descripcion: '',
        imagen: ''
    })


const handleSubmit =(e)=>{
   e.preventDefault()
   console.log(formValue)
   dispatch(addEjercisioASync(formValue))
   reset()
}
const handleFileChange =(e)=>{
    const file=e.target.files[0]
    FileUpload(file)
    .then((resp)=>{
        formValue.imagen = resp
        console.log(resp)
    })
    .catch((error)=>{console.warn(error)});
}

  return (
    <div>
    
    <Box   component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
    <MyFormHelperText />
    <MyFormHelperText />
    <MyFormHelperText />
      <FormControl sx={{ width: '50ch'}}>
        <OutlinedInput placeholder="Imagen" type='file' name="imagen"onChange={handleFileChange} />
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '50ch' }}>
        <OutlinedInput placeholder="Nombre" type='text' name='nombre' onChange={handleInputChange}  value={formValue.nombre}/>
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '50ch' }}>
        <OutlinedInput placeholder="Descripcion" type='text' name='descripcion'onChange={handleInputChange} value={formValue.descripcion}/>
        <MyFormHelperText />
        <Button variant="contained" color="success" type="submit" style={{ margin: "2%" }}>
                Guardar
            </Button>
      </FormControl>
    </Box>
    </div>
  );
}

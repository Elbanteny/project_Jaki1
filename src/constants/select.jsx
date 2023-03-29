// import React, { useCallback, useContext, useState, useEffect } from 'react'
// import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
// import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormHelperText from '@mui/material/FormHelperText'
// import Checkbox from '@mui/material/Checkbox'
// import { AppContext } from '../Context'


// export default function SecondStep() {
//   const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
//   const { provinsiM, kotaM, kecamatanM, kelurahanM, alamatlengkapM, provinsiB, kotaB, kecamatanB, kelurahanB, alamatlengkapB, dateM, dateB, gender, agreenemt } = formValues

//   const [provinsiMuat, setProvinsiMuat] = useState([] as any[]);
//   const [provinsiBongkar, setProvinsiBongkar] = useState([] as any[]);
//   const [kotaMuat, setKotaMuat] = useState([] as any[]);
//   const [kotaBongkar, setKotaBongkar] = useState([] as any[]);
//   const [kecamatanMuat, setKecamatanMuat] = useState([] as any[]);
//   const [kecamatanBongkar, setKecamatanBongkar] = useState([] as any[]);
//   const [kelurahanMuat, setKelurahanMuat] = useState([] as any[]);
//   const [kelurahanBongkar, setKelurahanBongkar] = useState([] as any[]);
//   const [provinsiIdM, setProvinsiIdM] = useState('');
//   const [provinsiIdB, setProvinsiIdB] = useState('');
//   const [kotaIdM, setKotaIdM] = useState('');
//   const [kotaIdB, setKotaIdB] = useState('');
//   const [kecamatanIdM, setKecamatanIdM] = useState('');
//   const [kecamatanIdB, setKecamatanIdB] = useState('');
//   const [kelurahanIdM, setKelurahanIdM] = useState('');
//   const [kelurahanIdB, setKelurahanIdB] = useState('');

//   const isError = useCallback(
//     () =>
//       Object.keys({ provinsiM, kotaM, kecamatanM, kelurahanM, alamatlengkapM, provinsiB, kotaB, kecamatanB, kelurahanB, alamatlengkapB, dateM, dateB, gender, agreenemt }).some(
//         (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
//       ),
//     [formValues, provinsiM, kotaM, kecamatanM, kelurahanM, alamatlengkapM,  provinsiB, kotaB, kecamatanB, kelurahanB, alamatlengkapB, dateM, dateB, gender, agreenemt]
//   )

//   useEffect( () => {
//     const getProvinsi = async () => {
//       const res = await fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json");
//       const getProv = await res.json();
//       console.log(getProv);
//       setProvinsiMuat(await getProv)
//       setProvinsiBongkar(await getProv)
//     }
//     getProvinsi();
//   },[]);

//   const handleProvinsiMuat = (e : any) => {
//     const getProvinsiId = e.target.value;
//     console.log(getProvinsiId);
//      setProvinsiIdM(getProvinsiId)
//   }
//   const handleProvinsiBongkar = (e : any) => {
//     const getProvinsiId = e.target.value;
//     console.log(getProvinsiId);
//      setProvinsiIdB(getProvinsiId)
//   }

//   useEffect( () => {
//     const getKotaMuat = async () => {
//       const resK = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiIdM}.json`);
//       const getKot = await resK.json();
//       console.log(getKot);
//       setKotaMuat(await getKot)
//     }
//     getKotaMuat();
//   },[provinsiIdM]);

//   useEffect( () => {
//     const getKotaBongkar = async () => {
//       const resK = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiIdB}.json`);
//       const getKot = await resK.json();
//       console.log(getKot);
//       setKotaBongkar(await getKot)
//     }
//     getKotaBongkar();
//   },[provinsiIdB]);

//   const handleKotaMuat = (e : any) => {
//     const getKotaId = e.target.value
//     console.log(getKotaId);
//     setKotaIdM(getKotaId)
//   }

//   const handleKotaBongkar = (e : any) => {
//     const getKotaId = e.target.value
//     console.log(getKotaId);
//     setKotaIdB(getKotaId)
//   }

//   useEffect(() => {
//     const getKecamatanMuat = async () => {
//       const resKec = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kotaIdM}.json`)
//       const getKec = await resKec.json();
//       console.log(getKec);
//       setKecamatanMuat(await getKec);
//     }
//     getKecamatanMuat();
//   }, [kotaIdM])

//   useEffect(() => {
//     const getKecamatanBongkar = async () => {
//       const resKec = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kotaIdB}.json`)
//       const getKec = await resKec.json();
//       console.log(getKec);
//       setKecamatanBongkar(await getKec);
//     }
//     getKecamatanBongkar();
//   }, [kotaIdB])

//   const handleKecamatanMuat = (e : any) => {
//     const getKecId = e.target.value
//     console.log(getKecId);
//     setKecamatanIdM(getKecId)
//   }
//   const handleKecamatanBongkar = (e : any) => {
//     const getKotaId = e.target.value
//     console.log(getKotaId);
//     setKecamatanIdB(getKotaId)
//   }

//   useEffect(() => {
//     const getKeluarahanMuat = async () => {
//       const resKel = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatanIdM}.json`)
//       const getKel = await resKel.json();
//       console.log(getKel);
//       setKelurahanMuat(await getKel);
//     }
//     getKeluarahanMuat();
//   }, [kecamatanIdM])

//   useEffect(() => {
//     const getKelurahanBongkar = async () => {
//       const resKel = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatanIdB}.json`)
//       const getKel = await resKel.json();
//       console.log(getKel);
//       setKelurahanBongkar(await getKel);
//     }
//     getKelurahanBongkar();
//   }, [kecamatanIdB])

//   const handleKelurahanMuat = (e : any) => {
//     const getKelId = e.target.value
//     console.log(getKelId);
//     setKelurahanIdM(getKelId)
//   }
//   const handleKelurahanBongkar = (e : any) => {
//     const getKelId = e.target.value
//     console.log(getKelId);
//     setKelurahanIdB(getKelId)
//   }

//   return (
//     <>
//     <Typography variant='h5'>
//       Bongkar Muat!
//     </Typography>
//     <Grid container spacing={0.5}>
//          <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Provinsi Muat'
//             name='provinsiM'
//             onChange={(e) => handleProvinsiMuat(e)}
//             error={!!provinsiM.error}
//             helperText={provinsiM.error}
//             required={provinsiM.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Provinsi===</option>
//             {
//             provinsiMuat.map((provinsiget) => (
//               <option key={provinsiget.province_id} value={provinsiget.id}>{provinsiget.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant='outlined'
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Provinsi Bongkar'
//             name='provinsiB'
//             onChange={(e) => handleProvinsiBongkar(e)}
//             error={!!provinsiB.error}
//             helperText={provinsiB.error}
//             required={provinsiB.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Provinsi===</option>
//           {
//             provinsiBongkar.map((provinsiget) => (
//               <option key={provinsiget.id} value={provinsiget.id}>{provinsiget.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Kota/Kab Muat'
//             name='kotaM'
//             onChange={(e) => handleKotaMuat(e)}
//             error={!!kotaM.error}
//             helperText={kotaM.error}
//             required={kotaM.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Kota/Kabupaten===</option>
//           {
//             kotaMuat.map( (resK) => (
//               <option key={resK.id} value={resK.id}>{resK.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Kota/Kab Bongkar'
//             name='kotaB'
//             onChange={(e) => handleKotaBongkar(e)}
//             error={!!kotaB.error}
//             helperText={kotaB.error}
//             required={kotaB.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Kota/Kabupaten===</option>
//           {
//             kotaBongkar.map( (resK) => (
//               <option key={resK.id} value={resK.id}>{resK.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Kecamatan Muat'
//             name='kecamatanM'
//             onChange={(e) => handleKecamatanMuat(e)}
//             error={!!kecamatanM.error}
//             helperText={kecamatanM.error}
//             required={kecamatanM.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Kecamatan===</option>
//           {
//             kecamatanMuat.map((kecamatanget) => (
//               <option key={kecamatanget.id} value={kecamatanget.id}>{kecamatanget.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Kecamatan Bongkar'
//             name='kecamatanB'
//             onChange={(e) => handleKecamatanBongkar(e)}
//             error={!!kecamatanB.error}
//             helperText={kecamatanB.error}
//             required={kecamatanB.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Kecamatan===</option>
//           {
//             kecamatanBongkar.map((kecamatanget) => (
//               <option key={kecamatanget.id} value={kecamatanget.id}>{kecamatanget.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Kelurahan Muat'
//             name='kelurahanM'
//             onChange={(e) => handleKelurahanMuat(e)}
//             error={!!kelurahanM.error}
//             helperText={kelurahanM.error}
//             required={kelurahanM.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Kelurahan===</option>
//           {
//             kelurahanMuat.map((kelurahanget) => (
//               <option key={kelurahanget.id} value={kelurahanget.id}>{kelurahanget.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Kelurahan Bongkar'
//             name='kelurahanB'
//             onChange={(e) => handleKelurahanBongkar(e)}
//             error={!!kelurahanB.error}
//             helperText={kelurahanB.error}
//             required={kelurahanB.required}
//           >
//           <option value=''> </option>
//           <option>===Pilih Kelurahan===</option>
//           {
//             kelurahanBongkar.map((kelurahanget) => (
//               <option key={kelurahanget.id} value={kelurahanget.id}>{kelurahanget.name}</option>
//             ))
//           }
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Alamat Lengkap Muat'
//             name='alamatlengkapM'
//             value={alamatlengkapM.value}
//             onChange={handleChange}
//             error={!!alamatlengkapM.error}
//             helperText={alamatlengkapM.error}
//             required={alamatlengkapM.required}
//           >
//             <option value=''> </option>
//             <option value='08.00 AM'>08.00 AM</option>
//             <option value='10.00 AM'>10.00 AM</option>
//             <option value='12.00 AM'>12.00 AM</option>
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             select
//             SelectProps={{
//               native: true
//             }}
//             label='Alamat Lengkap Bongkar'
//             name='alamatlengkapB'
//             value={alamatlengkapB.value}
//             onChange={handleChange}
//             error={!!alamatlengkapB.error}
//             helperText={alamatlengkapB.error}
//             required={alamatlengkapB.required}
//           >
//             <option value=''> </option>
//             <option value='08.00 AM'>08.00 AM</option>
//             <option value='10.00 AM'>10.00 AM</option>
//             <option value='12.00 AM'>12.00 AM</option>
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             InputLabelProps={{
//               shrink: true
//             }}
//             label='Tanggal Muat'
//             name='dateM'
//             type='date'
//             defaultValue={dateM.value}
//             onChange={handleChange}
//             required={dateM.required}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             variant="outlined"
//             margin={margin}
//             fullWidth
//             InputLabelProps={{
//               shrink: true
//             }}
//             label='Tanggal Bongkar'
//             name='dateB'
//             type='date'
//             defaultValue={dateB.value}
//             onChange={handleChange}
//             required={dateB.required}
//           />
//         </Grid>
//       </Grid>

//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
//         <Button onClick={handleBack} sx={{ mr: 1 }}>
//           Back
//         </Button>
//         <Button>
//           Next
//         </Button>
//       </Box>
//     </>
//   )
// }

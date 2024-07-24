import { Button, Row } from "antd"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/hook"
import { setUser, TUser } from "../redux/features/auth/authSlice"
import { verifyToken } from "../utils/verifyToken"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import PHForm from "../components/form/PHForm"
import PHInput from "../components/form/PHInput"


const Login = () => {
  const navigate = useNavigate();
  // const{register,handleSubmit}=useForm({
  //   defaultValues:{
  //     userId:'0001',
  //     password:'admin12345'
  //   }
  // })
  const defaultValues = {
    userId: '0001',
    password: 'admin12345',
  };
  const dispatch=useAppDispatch()
  const[login,{error}]=useLoginMutation()
  
  const onSubmit=async(data)=>{
    console.log(data)
    const toastId = toast.loading('Logging in');
  try {
    const userInfo={
      id:data.userId,
      password:data.password,
    }
    const res= await login(userInfo).unwrap()
    const user = verifyToken(res.data.accessToken) as TUser;
    // console.log(user)
    dispatch(setUser({user:user,token:res.data.accessToken}))
    toast.success('Logged in', { id: toastId, duration: 2000 });

    navigate(`/${user.role}/dashboard`);
    // console.log(res)
  } catch (error) {
    console.log(error)
    toast.error('Something went wrong', { id: toastId, duration: 2000 });
  }
  }
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
    <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
      <PHInput type="text" name="userId" label="ID:" />
      <PHInput type="text" name="password" label="Password" />
      <Button htmlType="submit">Login</Button>
    </PHForm>
  </Row>
  )
}

export default Login

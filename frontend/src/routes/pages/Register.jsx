import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import { Label } from "../../components/formularios/Label";
import { Input } from "../../components/formularios/Input";
import { Button } from "../../components/formularios/Button";

export const Register = () => {
  const { signup, error } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);

    if (user) {
      navigate("/");
    }
  });

  return (
    <section className="flex items-center gap-12 h-screen pt-[300px] bg-gray-100 flex-col relative">
      <div className="absolute top-14">
        <img className="h-[100px]" src={"./logoempresa.png"} />
      </div>
      {/* <div className="h-[300px] rounded-full absolute top-10 left-[300px] w-[300px] bg-indigo-700 shadow-lg"></div> */}
      <form onSubmit={onSubmit} className="flex w-1/4 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label label="Email del registro" />
          <Input placeholder={"emailregistro@email.com"} type={"email"} />
        </div>
        <div className="flex flex-col gap-2">
          <Label label="Contraseña del registro" />
          <Input placeholder={""} type={"password"} />
        </div>
        <div>
          <Button type={"button"} titulo={"Iniciar Sesión"} />
        </div>
      </form>

      <svg
        className="absolute bottom-[-50px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6366F1"
          fill-opacity="1"
          d="M0,192L48,170.7C96,149,192,107,288,85.3C384,64,480,64,576,90.7C672,117,768,171,864,170.7C960,171,1056,117,1152,80C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

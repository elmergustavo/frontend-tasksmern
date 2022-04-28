import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";


const EditarPerfil = () => {
  const { auth, setAuth, actualizarPerfil } = useAuth();
  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});



  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  const handleSumit = async (e) => {
    e.preventDefault();
    const { nombre, email } = perfil;

    if ([nombre, email].includes("")) {
      setAlerta({
        msg: "Email y Nombre son obligatorios",
        error: true,
      });
    }
    const resultado = await actualizarPerfil(perfil);
    setAuth(perfil)
    setAlerta(resultado);
    setTimeout(() => {
      setAlerta({});
    }, 3000);
  };

  const { msg } = alerta;

  const CardAvatar = () => (
    <article className="bg-[#1C1F4A] row-span-2 rounded-lg overflow-hidden text-white">
      <section className="overflow-hidden p-4 bg-[#5847EB] text-white rounded-lg">
        <img
          src={auth.imagen}
          alt=""
          className="rounded-full border-4 border-gray-400 w-16 mb-7"
        />
        <div className="fonts pb-12">
          <p className="font-thin">{perfil.email}</p>
          <h2 className="text-5xl">{perfil.nombre}</h2>
        </div>
      </section>
      <section className="p-4">
        <ul>
          <li className="font-bold">Sitio web</li>
          <li>{perfil.web}</li>
          <li className="font-bold">Telefono</li>
          <li>{perfil.telefono}</li>
        </ul>
      </section>
    </article>
  );

  const CardWork = ({ bgColor }) => (
    <article
      className={`grid grid-rows-3 ${
        bgColor || "bg-black"
      } rounded-b-xl rounded-t-lg text-white`}
    >
      <div className="row-span-1 bg-svg" />
      <div className="p-4 bg-[#1C1F4A] row-span-2 rounded-lg hover:cursor-pointer hover:bg-white/30">
        <div className="flex justify-between">
          <h5>Work</h5>
          <p>lorem</p>
        </div>
        <h3 className="text-4xl">32hrs</h3>
        <p>Last work - lorem</p>
      </div>
    </article>
  );

  return (
    <>
      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}{" "}
        <span className="text-indigo-600 font-bold">Informacion aqui</span>
      </p>
      <div className="grid place-content-center mt-10 md:py-0">
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 container mx-auto">
          <CardAvatar />
          <CardWork bgColor="bg-gradient-to-r from-orange-400 to-yellow-500" />
          <CardWork bgColor="bg-gradient-to-r from-blue-500 to-cyan-500" />
          <CardWork bgColor="bg-gradient-to-r from-purple-500 to-pink-500" />
          <CardWork bgColor="bg-gradient-to-r from-green-500 to-blue-500" />
          <CardWork bgColor="bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          <CardWork bgColor="bg-gradient-to-r from-orange-400 to-yellow-500" />
        </div>
      </div>

      <form
        className="bg-white border-4 border-opacity-30 px-3 py-5 md:border-4 border-slate-400 md:px-16 md:py-14 md:mx-28 mt-10"
        onSubmit={handleSumit}
      >
        {msg && <Alerta alerta={alerta} />}
        <div className="grid xl:grid-cols-2 xl:gap-6 mt-9">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="nombre"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={perfil.nombre || ""}
              onChange={(e) =>
                setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="nombre"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="url"
              name="web"
              id="web"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={perfil.web || ""}
              onChange={(e) =>
                setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="descripcion"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Sitio web
            </label>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 xl:gap-6 mt-9">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="telefono"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={perfil.telefono || ""}
              onChange={(e) =>
                setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="floating_repeat_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="imagen"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={perfil.imagen || ""}
              onChange={(e) =>
                setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="floating_repeat_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Link de la imagen
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="email"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={perfil.email}
              onChange={(e) =>
                setPerfil({
                  ...perfil,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="floating_repeat_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo Electronico
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
          bg-indigo-600 text-white text-center mt-5 flex gap-2 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Guardar Cambios
        </button>
      </form>
    </>
  );
};

export default EditarPerfil;

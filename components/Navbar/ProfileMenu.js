import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Badge,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  BellIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import jsCookie from "js-cookie";
import Router from "next/router";

// profile menu component
const profileMenuItems = [
  {
    label: "Notificaciones",
    icon: BellIcon,
    url: "/notificaciones",
    f: 2,
  },

  {
    label: "Perfil",
    icon: UserCircleIcon,
    url: "/auth/perfil",
    f: 0,
  },
  {
    label: "Mail Interno",
    icon: InboxArrowDownIcon,
    url: "/mail/inbox",
    f: 3,
  },

  {
    label: "Cerrar Sesion",
    icon: PowerIcon,
    url: "#",
    f: 1,
  },
];

export const ProfileMenu = ({ user, msj, orde, prest }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const obtenerIniciales = (usuario) => {
    if (!usuario || usuario.trim() === "") return "U";
    const partes = usuario.trim().split(" ");
    if (partes.length >= 2) {
      return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
    }
    return usuario.substring(0, 2).toUpperCase();
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="white"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {msj > 0 ? (
            <Badge overlap="circular" placement="bottom-end">
              <div className="w-8 h-8 rounded-full bg-pakistan-green text-white flex items-center justify-center font-bold text-sm border border-blue-500">
                {obtenerIniciales(user?.nombre + " " + user?.apellido)}
              </div>
            </Badge>
          ) : (
            <div className="w-8 h-8 rounded-full bg-pakistan-green text-white flex items-center justify-center font-bold text-sm border border-blue-500">
              {obtenerIniciales(user?.nombre + " " + user?.apellido)}
            </div>
          )}

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        <MenuItem className="flex items-end gap-2 rounded">
          <Typography as="span" variant="small" className="font-normal ml-5">
            <u>Usuario</u>: {user?.usuario}
          </Typography>
        </MenuItem>
        <hr className="" />
        {profileMenuItems.map(({ label, icon, url, f }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-5 w-5 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Link
                href={`${url}`}
                onClick={() => {
                  if (f === 1) {
                    jsCookie.remove("usuario");
                    jsCookie.remove("token");
                    setTimeout(() => {
                      Router.replace("/");
                      window.location.reload();
                    }, 500);
                  }
                }}
              >
                {f === 2 ? (
                  <Badge content={msj + orde + prest} withBorder />
                ) : f === 3 ? (
                  <Badge content={msj} withBorder />
                ) : null}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

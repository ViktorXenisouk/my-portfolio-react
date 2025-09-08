import React, { useState,Fragment } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { useLanguageStore } from "../store/useLanguageStore";
import { Language } from "../types/Language";

const languages : {code:string,lang:Language,label:string}[] = [
  { code: "GB", lang: "en", label: "English" },
  { code: "RU", lang: "ru", label: "Русский" },
];

const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const store = useLanguageStore()

  const lang = languages.find((item) => item.lang === store.language)?.code as string

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (language: Language) => {
    store.setLanguage(language);
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton onClick={handleClick} size="small" sx={{ p: 0.5 }}>
        <ReactCountryFlag
          countryCode={lang}
          svg
          style={{
            width: "2em",
            height: "2em",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {languages.map((item) => (
          <MenuItem key={item.lang} onClick={() => handleSelect(item.lang)}>
            <ListItemIcon>
              <ReactCountryFlag
                countryCode={item.code}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  borderRadius: "4px",
                }}
              />
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}

export default LanguageSwitcher
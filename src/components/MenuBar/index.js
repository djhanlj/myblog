import React from 'react';
import * as S from './styled';

import { Home } from "styled-icons/boxicons-solid"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular"
import { Bulb as Light } from "styled-icons/boxicons-regular"
import { Grid } from "styled-icons/boxicons-solid"

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Voltar para Home">
                <S.MenuBarItem>
                    <Home />
                </S.MenuBarItem>
            </S.MenuBarLink>

            <S.MenuBarLink to="/search/" title="Pesquisar">
                <S.MenuBarItem>
                    <Search />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema" >
                <Light />
            </S.MenuBarItem>
            <S.MenuBarItem title="Mudar Visualização" >
                <Arrow />
            </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o Topo" >
                <Grid />
            </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar;
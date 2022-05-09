import { Injectable } from "@angular/core";
import { Game } from "models/Games";

@Injectable()
export class GameService {

    // Lista de Jogos
    gameList : Game[];

    // Objecto vazio
    game : Game;

    // Jogos DEFAULT
    valorant : Game = new Game('Valorant', 'Duas equipes de cinco jogam uma contra a outra, e os jogadores assumem o papel de "agentes" com habilidades únicas. No modo de jogo principal, a equipe atacante tem uma bomba, chamada Spike, que eles precisam plantar em um local. Se a equipe atacante proteger com sucesso a bomba e ela detonar, eles ganharão um ponto. Se a equipe defensora desarmar com sucesso a bomba ou o cronômetro de 100 segundos da rodada expirar, a equipe defensora receberá um ponto. Eliminar todos os membros da equipe adversária também ganha uma rodada. A primeira equipe a vencer o melhor de 24 rodadas vence a partida. O jogo também promove um servidor com tick rate de 128, que garante uma jogabilidade suave e baixo ping com uma expansão global de datacenters.', 'FPS', 0, 'Riot Games', '2000-10-20','https://conteudo.imguol.com.br/c/galeria/44/2020/06/02/valorant-1591100060180_v2_4x3.jpg', 'lWr6dhTcu-E');
    csgo : Game = new Game('CS:GO', 'O Counter-Strike: Global Offensive (CS:GO) é a continuação do jogo de equipas cheio de ação que foi pioneiro quando foi lançado há 12 anos atrás. O CS: GO apresenta-se com novos mapas, personagens, armas e ainda oferece versões atualizadas de conteúdo do CS clássico (de_dust, etc.). Para além disso, o CS:GO introduz novos modos de jogo, matchmaking, tabelas de classificação e muito mais.', 'FPS', 0, 'Valve', '2000-10-20','http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6', 'edYCtaNueQY');
    lol : Game = new Game('League of Legends', 'League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.', 'MOBA', 0, 'Riot Games', '2000-10-20','https://static.wixstatic.com/media/7e1518_1026bd07af79483d8b3894f513e1a5a5~mv2.jpg/v1/fill/w_1000,h_625,al_c,q_90,usm_0.66_1.00_0.01/7e1518_1026bd07af79483d8b3894f513e1a5a5~mv2.jpg', 'mDYqT0_9VR4');
    newWorld : Game = new Game('New World', 'New World é um MMORPG para PC desenvolvido pela Amazon Games, com data de lançamento para 31 de agosto deste ano. O jogo chega para concorrer com outros do mesmo estilo como World of Warcraft (WoW) e Black Desert Online, mas promete inovar com uma gameplay mais dinâmica e estratégica, com muitas opções de armas.', 'MMORPG', 39.99, 'Amazon', '2000-10-20','https://s2.glbimg.com/zPvvYfY_ATa1yMArOwf_9MW97c0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/5/H/jSobTRTBScuiqf472Psg/keyartmask-3840.jpg', 'm1C5dLnvlzg');
    wow : Game = new Game('World of Warcraft', 'World of Warcraft (também conhecido pelo acrônimo WoW) é um jogo on-line do gênero MMORPG, desenvolvido e distribuído pela produtora Blizzard Entertainment e lançado em 2004. O jogo se passa no mundo fantástico de Azeroth, introduzido no primeiro jogo da série, Warcraft: Orcs & Humans, lançado em 1994.', 'MMORPG', 65.99, 'Blizzard Entertainment', '2000-10-20','https://wallpaperaccess.com/full/1542960.jpg', 's4gBChg6AII');
    gta : Game = new Game('Grand Theft Auto V', 'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sétimo título principal da série Grand Theft Auto e foi lançado originalmente em 17 de setembro de 2013 para PlayStation 3 e Xbox 360, com remasterizações lançadas em 2014 para PlayStation 4 e Xbox One, em 2015 para Microsoft Windows e em 2022 para PlayStation 5 e Xbox Series X/S. O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.', 'ADVENTURE/ACTION', 9.99, 'Rockstar Games', '2000-10-20','https://tm.ibxk.com.br/2021/05/22/22111135194008.jpg?ims=1200x675', 'QkkoHAzjnUs');

    constructor() {
        this.gameList = [this.valorant, this.lol,this.newWorld, this.csgo,this.wow, this.gta];
        //this.gameList = [];
    }

    createGamePost(game : Game): void {
        this.gameList.push(game);
    }

    removeGamePost(index : number): void {
        this.gameList.splice(index, 1);
    }

    findGame(name : string) : Game {
        this.gameList.forEach((element, i) => {
            if (element.name == name) {
                this.game = element;
                this.game.index = i;
            }
        });
        return this.game;
    }

}
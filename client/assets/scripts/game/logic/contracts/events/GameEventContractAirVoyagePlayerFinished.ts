import { GameEventBaseDTO } from '../../../core/event/GameEventBaseDTO';
import { GameData, gameData } from '../../data/GameData';

export class GameEventContractAirVoyagePlayerFinished extends GameEventBaseDTO {
    public static readonly event: string = 'core.game.event.air_voyage_player_finished';

    public get subject(): string {
        return GameEventContractAirVoyagePlayerFinished.event;
    }

    public async exec(gameId: any, player: any, dice: any) {
        console.log(this.subject, gameId, player, dice);
        if (
            !gameData.currentGameId.eq(GameData.INVALID_GAME_ID) &&
            !gameData.currentGameId.eq(gameId)
        ) {
            return Promise.reject();
        }

        const game = await gameData.getGame(gameId);
    }
}

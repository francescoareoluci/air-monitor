import { CHANGE_ACTIVE_PLAYER } from "../constants/action_types";

export function changePlayer(payload) {
    return { type: CHANGE_ACTIVE_PLAYER, payload }
};
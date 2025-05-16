const fs = require("fs");
const path = require("path");

const CLAN_FILE = path.join(__dirname, "clans.json");

const readClans = () => {
  if (!fs.existsSync(CLAN_FILE)) {
    return {};
  }
  const data = fs.readFileSync(CLAN_FILE, "utf-8");
  return JSON.parse(data);
};

const writeClans = (clanData) => {
  fs.writeFileSync(CLAN_FILE, JSON.stringify(clanData, null, 2));
};

const playerOnClan = (sender, chat, clanData) => {
  const userClan = Object.values(clanData).find(
    (c) => c.members && c.members.some((m) => m.id === sender),
  );
  return !!userClan;
};

const setMissions = (clan) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const currentWeek = new Date().toISOString().slice(0, 7); 

  if (!clan.missions) {
    clan.missions = {
      daily: {
        description: "",
        progress: 0,
        target: 0,
        reward: 0,
      },
      weekly: {
        description: "",
        progress: 0,
        target: 0,
        reward: 0,
      },
    };
  }

  if (!clan.lastDailyMissionDate || clan.lastDailyMissionDate !== currentDate) {
    clan.missions.daily = {
      description: "Complete 3 battles",
      progress: 0,
      target: 3,
      reward: 50,
    };
    clan.lastDailyMissionDate = currentDate;
  }

  if (
    !clan.lastWeeklyMissionDate ||
    clan.lastWeeklyMissionDate !== currentWeek
  ) {
    clan.missions.weekly = {
      description: "Recruit 5 new members",
      progress: 0,
      target: 5,
      reward: 200,
    };
    clan.lastWeeklyMissionDate = currentWeek;
  }
};

const updateMissionProgress = (clan, missionType, progress) => {
  if (clan.missions[missionType]) {
    clan.missions[missionType].progress += progress;

    if (
      clan.missions[missionType].progress >= clan.missions[missionType].target
    ) {
      clan.points = (clan.points || 0) + clan.missions[missionType].reward;

      if (missionType === "daily") {
        clan.missions.daily.progress = 0;
      } else if (missionType === "weekly") {
        clan.missions.weekly.progress = 0;
      }

      return `Mission ${missionType} completed! You earned ${clan.missions[missionType].reward} points.`;
    }
  }

  return `Mission ${missionType} progress has been updated.`;
};

const updateClanTaskProgress = (clan, progress) => {
  if (!clan.clanTasks) {
    clan.clanTasks = {
      description: "",
      progress: 0,
      target: 0,
      reward: 0,
    };
  }

  if (clan.clanTasks) {
    clan.clanTasks.progress += progress;

    if (clan.clanTasks.progress >= clan.clanTasks.target) {
      clan.points = (clan.points || 0) + clan.clanTasks.reward;
      clan.clanTasks.progress = 0;

      return `Clan task completed! The clan earned ${clan.clanTasks.reward} points.`;
    }
  }

  return `Clan task progress has been updated.`;
};

const upgradeClanLevel = (clan, user) => {
  const levelCosts = {
    2: 100,
    3: 200,
    4: 400,
    5: 800,
  };

  let nextLevel = clan.level + 1;
  let cost = levelCosts[nextLevel];

  if (!cost) return "Maximum level already reached.";
  if (user.balance < cost)
    return `Insufficient balance. You need ${cost} to upgrade to level ${nextLevel}.`;

  user.balance -= cost;
  clan.level = nextLevel;

  return `Clan successfully upgraded to level ${nextLevel}. Your remaining balance: ${user.balance}.`;
};

function simulateWinner(clan1, clan2) {
  let clan1Power = clan1.power * clan1.members.length;
  let clan2Power = clan2.power * clan2.members.length;

  if (clan1Power > clan2Power) {
    return clan1.clan;
  } else if (clan2Power > clan1Power) {
    return clan2.clan;
  } else {
    return "Draw";
  }
}

async function getClanData(clanName) {
  let clans = readClans();
  return clans[clanName] || null;
}

function saveClanData(clanName, data) {
  let clans = readClans();
  clans[clanName] = data;
  writeClans(clans);
}

function saveTournamentData(tournament) {
  let clans = readClans();
  clans.tournaments[tournament.name] = tournament;
  writeClans(clans);
}

module.exports = {
  playerOnClan,
  readClans,
  writeClans,
  setMissions,
  updateMissionProgress,
  updateClanTaskProgress,
  upgradeClanLevel,
  simulateWinner,
  getClanData,
  saveClanData,
  saveTournamentData,
};
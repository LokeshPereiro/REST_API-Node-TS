import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>; // as Array<DiaryEntry>, tienes que declararlo de esta forma cuando se trabaja com los json [Assertion Type], "forzarlo"

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry !== null) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] =>
    diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility,
      };
    });

export const addEntry = (): undefined => undefined;

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo();
// diariesWithoutSensitiveInfo[0].comment;

export interface Launch {
  name?: string;
  date_utc?: string;
  rocket?: string;
}

export const normaliseData = (launchData: any, rocketData: any): [Launch] => {
  return launchData.map((item: any) => {
    const typedItem = {} as Launch;
    typedItem.name = item.name;
    typedItem.date_utc = item.date_utc;
    typedItem.rocket = rocketData.find(
      (rocket: any) => rocket.id === item.rocket
    );
    return typedItem;
  });
};

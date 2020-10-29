export class IGroup {
  id: number;
  name: string;
}

export class GroupResponse{
  status: string;
  data: IGroup[];
}

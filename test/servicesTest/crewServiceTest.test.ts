import { CrewRepository } from "../../src/repository/crewRepository";
import { CrewServices } from "../../src/service/crewService";
import crewMockedData from "../mockedData/crewData";

jest.mock("../../src/repository/crewRepository");

const CrewRepositoryMock = CrewRepository as jest.Mock<CrewRepository>;

describe("CrewRepository tests", () => {
  let crewRepositoryMock: jest.Mocked<CrewRepository>;
  let crewServices: CrewServices;

  beforeEach(() => {
    crewRepositoryMock = new CrewRepositoryMock() as jest.Mocked<CrewRepository>;
    crewServices = new CrewServices(crewRepositoryMock);
  });

  test("Should return a list of crews", async () => {
    crewRepositoryMock.getAll.mockResolvedValue(crewMockedData.crewData);

    const crews = await crewServices.getAll();
    expect(crewRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(crews).toEqual(crewMockedData.crewData);
  });

  test("Should return one crew by it's id", async () => {
    const crewId = 2;
    
    crewRepositoryMock.get.mockResolvedValue(crewMockedData.crew2);
    const crew = await crewServices.get(crewId);
    expect(crewRepositoryMock.get).toHaveBeenCalledTimes(1);

    expect(crewRepositoryMock.get).toHaveBeenCalledWith(crewId);
    expect(crew).toEqual(crewMockedData.crew2);
  });

  test("Should create a crew", async () => {

    crewRepositoryMock.create.mockResolvedValue(crewMockedData.crew2);
    const crew = await crewServices.create(crewMockedData.crew2);
    
    expect(crewRepositoryMock.create).toHaveBeenCalledTimes(1);

    expect(crewRepositoryMock.create).toHaveBeenCalledWith(crewMockedData.crew2);
    expect(crew).toEqual(crewMockedData.crew2);
  });

  test("Should update a crew", async () => {
    const crewId = 2;
 
    crewRepositoryMock.get.mockResolvedValue(crewMockedData.crew2);

    crewRepositoryMock.update.mockResolvedValue();
    const crew = await crewServices.update(crewId, crewMockedData.crew2);

    expect(crewRepositoryMock.update).toHaveBeenCalledTimes(1);
    expect(crewRepositoryMock.update).toHaveBeenCalledWith(crewId, crewMockedData.crew2);
    expect(crewRepositoryMock.update).toHaveReturned();
    expect(crew).toBeUndefined();
  });

  test("Should delete a crew", async () => {
    const crewId = 2;
    crewRepositoryMock.get.mockResolvedValue(crewMockedData.crew2);

    crewRepositoryMock.delete.mockResolvedValue();
    const crew = await crewServices.delete(crewId);

    expect(crewRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(crewRepositoryMock.delete).toHaveBeenCalledWith(crewId);
    expect(crewRepositoryMock.delete).toHaveReturned();
    expect(crew).toBeUndefined();
  });
});

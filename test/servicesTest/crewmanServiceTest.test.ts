import { CrewmanRepository } from "../../src/repository/crewmanRepository";
import { CrewmanServices } from "../../src/service/crewmanService";
import crewmanMockedData from "../mockedData/crewmanData";

jest.mock("../../src/repository/crewmanRepository");

const CrewmanRepositoryMock = CrewmanRepository as jest.Mock<CrewmanRepository>;

describe("CrewmanRepository tests", () => {
  let crewmanRepositoryMock: jest.Mocked<CrewmanRepository>;
  let crewmanServices: CrewmanServices;

  beforeEach(() => {
    crewmanRepositoryMock = new CrewmanRepositoryMock() as jest.Mocked<CrewmanRepository>;
    crewmanServices = new CrewmanServices(crewmanRepositoryMock);
  });

  test("Should return a list of crewmans", async () => {
    crewmanRepositoryMock.getAll.mockResolvedValue(crewmanMockedData.crewmanData);

    const crewmans = await crewmanServices.getAll();
    expect(crewmanRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(crewmans).toEqual(crewmanMockedData.crewmanData);
  });

  test("Should return one crewman by it's id", async () => {
    const crewmanId = 2;
    
    crewmanRepositoryMock.get.mockResolvedValue(crewmanMockedData.crewman2);
    const crewman = await crewmanServices.get(crewmanId);
    expect(crewmanRepositoryMock.get).toHaveBeenCalledTimes(1);

    expect(crewmanRepositoryMock.get).toHaveBeenCalledWith(crewmanId);
    expect(crewman).toEqual(crewmanMockedData.crewman2);
  });

  test("Should create a crewman", async () => {

    crewmanRepositoryMock.create.mockResolvedValue(crewmanMockedData.crewman2);
    const crewman = await crewmanServices.create(crewmanMockedData.crewman2);
    expect(crewmanRepositoryMock.create).toHaveBeenCalledTimes(1);

    expect(crewmanRepositoryMock.create).toHaveBeenCalledWith(crewmanMockedData.crewman2);
    expect(crewman).toEqual(crewmanMockedData.crewman2);
  });

  test("Should update a crewman", async () => {
    const crewmanId = 2;
 
    crewmanRepositoryMock.get.mockResolvedValue(crewmanMockedData.crewman2);

    crewmanRepositoryMock.update.mockResolvedValue();
    const crewman = await crewmanServices.update(crewmanId, crewmanMockedData.crewman2);

    expect(crewmanRepositoryMock.update).toHaveBeenCalledTimes(1);
    expect(crewmanRepositoryMock.update).toHaveBeenCalledWith(crewmanId, crewmanMockedData.crewman2);
    expect(crewmanRepositoryMock.update).toHaveReturned();
    expect(crewman).toBeUndefined();
  });

  test("Should delete a crewman", async () => {
    const crewmanId = 2;
    crewmanRepositoryMock.get.mockResolvedValue(crewmanMockedData.crewman2);

    crewmanRepositoryMock.delete.mockResolvedValue();
    const crewman = await crewmanServices.delete(crewmanId);

    expect(crewmanRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(crewmanRepositoryMock.delete).toHaveBeenCalledWith(crewmanId);
    expect(crewmanRepositoryMock.delete).toHaveReturned();
    expect(crewman).toBeUndefined();
  });
});

import { LaunchRepository } from "../../src/repository/launchRepository";
import { LaunchServices } from "../../src/service/launchService";
import launchMockedData from "../mockedData/launchData";

jest.mock("../../src/repository/launchRepository");

const LaunchRepositoryMock = LaunchRepository as jest.Mock<LaunchRepository>;

describe("LaunchRepository tests", () => {
  let launchRepositoryMock: jest.Mocked<LaunchRepository>;
  let launchServices: LaunchServices;

  beforeEach(() => {
    launchRepositoryMock = new LaunchRepositoryMock() as jest.Mocked<LaunchRepository>;
    launchServices = new LaunchServices(launchRepositoryMock);
  });

  test("Should return a list of launchs", async () => {
    launchRepositoryMock.getAll.mockResolvedValue(launchMockedData.launchData);

    const launchs = await launchServices.getAll();
    expect(launchRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(launchs).toEqual(launchMockedData.launchData);
  });

  test("Should return one launch by it's id", async () => {
    const launchId = 2;
    
    launchRepositoryMock.get.mockResolvedValue(launchMockedData.launch2);
    const launch = await launchServices.get(launchId);
    expect(launchRepositoryMock.get).toHaveBeenCalledTimes(1);

    expect(launchRepositoryMock.get).toHaveBeenCalledWith(launchId);
    expect(launch).toEqual(launchMockedData.launch2);
  });

  test("Should create a launch", async () => {

    launchRepositoryMock.create.mockResolvedValue(launchMockedData.launch2);
    const launch = await launchServices.create(launchMockedData.launch2);
    
    expect(launchRepositoryMock.create).toHaveBeenCalledTimes(1);

    expect(launchRepositoryMock.create).toHaveBeenCalledWith(launchMockedData.launch2);
    expect(launch).toEqual(launchMockedData.launch2);
  });

  test("Should update a launch", async () => {
    const launchId = 2;
 
    launchRepositoryMock.get.mockResolvedValue(launchMockedData.launch2);

    launchRepositoryMock.update.mockResolvedValue();
    const launch = await launchServices.update(launchId, launchMockedData.launch2);

    expect(launchRepositoryMock.update).toHaveBeenCalledTimes(1);
    expect(launchRepositoryMock.update).toHaveBeenCalledWith(launchId, launchMockedData.launch2);
    expect(launchRepositoryMock.update).toHaveReturned();
    expect(launch).toBeUndefined();
  });

  test("Should delete a launch", async () => {
    const launchId = 2;
    launchRepositoryMock.get.mockResolvedValue(launchMockedData.launch2);

    launchRepositoryMock.delete.mockResolvedValue();
    const launch = await launchServices.delete(launchId);

    expect(launchRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(launchRepositoryMock.delete).toHaveBeenCalledWith(launchId);
    expect(launchRepositoryMock.delete).toHaveReturned();
    expect(launch).toBeUndefined();
  });
});

import { RocketRepository } from "../../src/repository/rocketRepository";
import { RocketServices } from "../../src/service/rocketService";
import rocketMockedData from "../mockedData/rocketData";

jest.mock("../../src/repository/rocketRepository");

const RocketRepositoryMock = RocketRepository as jest.Mock<RocketRepository>;

describe("RocketRepository tests", () => {
  let rocketRepositoryMock: jest.Mocked<RocketRepository>;
  let rocketServices: RocketServices;

  beforeEach(() => {
    rocketRepositoryMock = new RocketRepositoryMock() as jest.Mocked<RocketRepository>;
    rocketServices = new RocketServices(rocketRepositoryMock);
  });

  test("Should return a list of rockets", async () => {
    rocketRepositoryMock.getAll.mockResolvedValue(rocketMockedData.rocketData);

    const rockets = await rocketServices.getAll();
    expect(rocketRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(rockets).toEqual(rocketMockedData.rocketData);
  });

  test("Should return one rocket by it's id", async () => {
    const rocketId = 2;
    
    rocketRepositoryMock.get.mockResolvedValue(rocketMockedData.rocket2);
    const rocket = await rocketServices.get(rocketId);
    expect(rocketRepositoryMock.get).toHaveBeenCalledTimes(1);

    expect(rocketRepositoryMock.get).toHaveBeenCalledWith(rocketId);
    expect(rocket).toEqual(rocketMockedData.rocket2);
  });

  test("Should create a rocket", async () => {

    rocketRepositoryMock.create.mockResolvedValue(rocketMockedData.rocket2);
    const rocket = await rocketServices.create(rocketMockedData.rocket2);
    expect(rocketRepositoryMock.create).toHaveBeenCalledTimes(1);

    expect(rocketRepositoryMock.create).toHaveBeenCalledWith(rocketMockedData.rocket2);
    expect(rocket).toEqual(rocketMockedData.rocket2);
  });

  test("Should update a rocket", async () => {
    const rocketId = 2;
 
    rocketRepositoryMock.get.mockResolvedValue(rocketMockedData.rocket2);

    rocketRepositoryMock.update.mockResolvedValue();
    const rocket = await rocketServices.update(rocketId, rocketMockedData.rocket2);

    expect(rocketRepositoryMock.update).toHaveBeenCalledTimes(1);
    expect(rocketRepositoryMock.update).toHaveBeenCalledWith(rocketId, rocketMockedData.rocket2);
    expect(rocketRepositoryMock.update).toHaveReturned();
    expect(rocket).toBeUndefined();
  });

  test("Should delete a rocket", async () => {
    const rocketId = 2;
    rocketRepositoryMock.get.mockResolvedValue(rocketMockedData.rocket2);

    rocketRepositoryMock.delete.mockResolvedValue();
    const rocket = await rocketServices.delete(rocketId);

    expect(rocketRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(rocketRepositoryMock.delete).toHaveBeenCalledWith(rocketId);
    expect(rocketRepositoryMock.delete).toHaveReturned();
    expect(rocket).toBeUndefined();
  });
});

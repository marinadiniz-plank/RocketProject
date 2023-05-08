import { RocketServices } from "../../src/service/rocketService";
import { Request, Response } from "express";
import { RocketController } from "../../src/controllers/rocketController";
import rocketMockedData from "../mockedData/rocketData";

jest.mock("../../src/service/rocketService");

const RocketServiceMock = RocketServices as jest.Mock<RocketServices>;

describe("RocketService tests", () => {
  let rocketServiceMock: jest.Mocked<RocketServices>;
  let rocketController: RocketController;

  beforeEach(() => {
    rocketServiceMock = new RocketServiceMock() as jest.Mocked<RocketServices>;
    rocketController = new RocketController(rocketServiceMock);
  });

  test("Should return a list of rockets", async () => {
    rocketServiceMock.getAll.mockResolvedValue(rocketMockedData.rocketData);

    const rockets = await rocketController.getAll(
      {} as Request,
      { json: () => {} } as Response
    );
    expect(rocketServiceMock.getAll).toHaveBeenCalledTimes(1);
    expect(rockets).toEqual(rocketMockedData.rocketData);
  });

  test("Should return one rocket by it's id", async () => {
    const rocketId = "2";
    const request = { params: { id: rocketId } } as Request<{ id: string }>;

    rocketServiceMock.get.mockResolvedValue(rocketMockedData.rocket2);
    const rocket = await rocketController.get(request, {
      json: () => {},
    } as Response);
    expect(rocketServiceMock.get).toHaveBeenCalledTimes(1);

    expect(rocketServiceMock.get).toHaveBeenCalledWith(parseInt(rocketId));
    expect(rocket).toEqual(rocketMockedData.rocket2);
  });

  test("Should create a rocket", async () => {
    const request = { body: rocketMockedData.rocket1 } as Request;

    rocketServiceMock.create.mockResolvedValue(rocketMockedData.rocket1);
    const rocket = await rocketController.create(request, {
      json: () => {},
    } as Response);
    expect(rocketServiceMock.create).toHaveBeenCalledTimes(1);

    expect(rocketServiceMock.create).toHaveBeenCalledWith(
      rocketMockedData.rocket1
    );
    expect(rocket).toEqual(rocketMockedData.rocket1);
  });

  test("Should update a rocket", async () => {
    const rocketId = "2";
    const request = {
      params: {
        id: rocketId,
      },
      body: rocketMockedData.rocket2,
    } as Request<{ id: string }>;

    rocketServiceMock.get.mockResolvedValue(rocketMockedData.rocket2);

    rocketServiceMock.update.mockResolvedValue();
    const rocket = await rocketController.update(request, {
      json: () => {},
    } as Response);

    expect(rocketServiceMock.update).toHaveBeenCalledTimes(1);
    expect(rocketServiceMock.update).toHaveBeenCalledWith(
      parseInt(rocketId),
      rocketMockedData.rocket2
    );
    expect(rocketServiceMock.update).toHaveReturned();
    expect(rocket).toBeUndefined();
  });

  test("Should delete a rocket", async () => {
    const rocketId = "2";
    const request = {
      params: {
        id: rocketId,
      },
    } as Request<{ id: string }>;
    rocketServiceMock.get.mockResolvedValue(rocketMockedData.rocket2);

    rocketServiceMock.delete.mockResolvedValue();
    const rocket = await rocketController.delete(request, {
      json: () => {},
    } as Response);

    expect(rocketServiceMock.delete).toHaveBeenCalledTimes(1);
    expect(rocketServiceMock.delete).toHaveBeenCalledWith(parseInt(rocketId));
    expect(rocketServiceMock.delete).toHaveReturned();
    expect(rocket).toBeUndefined();
  });
});

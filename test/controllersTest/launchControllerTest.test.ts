import { LaunchServices } from "../../src/service/launchService";
import { Request, Response } from "express";
import { LaunchController } from "../../src/controllers/launchController";
import launchMockedData from "../mockedData/launchData";
import rocketMockedData from "../mockedData/rocketData";
import crewMockedData from "../mockedData/crewData";
import crewmanMockedData from "../mockedData/crewmanData";
import { RocketServices } from "../../src/service/rocketService";
import { CrewServices } from "../../src/service/crewService";
import { CrewmanServices } from "../../src/service/crewmanService";

jest.mock("../../src/service/launchService");
jest.mock("../../src/service/rocketService");
jest.mock("../../src/service/crewService");
jest.mock("../../src/service/crewmanService");

const RocketServiceMock = RocketServices as jest.Mock<RocketServices>;
const CrewServiceMock = CrewServices as jest.Mock<CrewServices>;
const CrewmanServiceMock = CrewmanServices as jest.Mock<CrewmanServices>;
const LaunchServiceMock = LaunchServices as jest.Mock<LaunchServices>;

describe("LaunchServices tests", () => {
  let launchServiceMock: jest.Mocked<LaunchServices>;
  let launchController: LaunchController;
  let rocketServiceMock: jest.Mocked<RocketServices>;
  let crewServiceMock: jest.Mocked<CrewServices>;
  let crewmanServiceMock: jest.Mocked<CrewmanServices>;

  beforeEach(() => {
    launchServiceMock = new LaunchServiceMock() as jest.Mocked<LaunchServices>;
    rocketServiceMock = new RocketServiceMock() as jest.Mocked<RocketServices>;
    crewServiceMock = new CrewServiceMock() as jest.Mocked<CrewServices>;
    crewmanServiceMock = new CrewmanServiceMock() as jest.Mocked<CrewmanServices>;
    launchController = new LaunchController(
      launchServiceMock,
      rocketServiceMock,
      crewServiceMock
    );
  });

  test("Should return a list of launchs", async () => {
    launchServiceMock.getAll.mockResolvedValue(launchMockedData.launchData);

    const launchs = await launchController.getAll(
      {} as Request,
      { json: () => {} } as Response
    );
    expect(launchServiceMock.getAll).toHaveBeenCalledTimes(1);
    expect(launchs).toEqual(launchMockedData.launchData);
  });

  test("Should return one launch by it's id", async () => {
    const launchId = "2";
    const request = { params: { id: launchId } } as Request<{ id: string }>;

    launchServiceMock.get.mockResolvedValue(launchMockedData.launch2);
    const launch = await launchController.get(request, {
      json: () => {},
    } as Response);
    expect(launchServiceMock.get).toHaveBeenCalledTimes(1);

    expect(launchServiceMock.get).toHaveBeenCalledWith(parseInt(launchId));
    expect(launch).toEqual(launchMockedData.launch2);
  });

  test("Should create a launch", async () => {
    const request = { body: launchMockedData.launch1 } as Request;
    
    launchServiceMock.create.mockResolvedValue(launchMockedData.launch1);

    rocketServiceMock.get.mockResolvedValue(rocketMockedData.rocket1);
    crewmanServiceMock.getSome.mockResolvedValue([crewmanMockedData.crewman1]);

    crewServiceMock.get.mockResolvedValue(crewMockedData.crew1);

    const launch = await launchController.create(request, {
      json: () => {},
    } as Response);
    
    expect(launchServiceMock.create).toHaveBeenCalledTimes(1);

    expect(launchServiceMock.create).toHaveBeenCalledWith(
      launchMockedData.launch1
    );
    expect(launch).toEqual(launchMockedData.launch1);
  });

  test("Should update a launch", async () => {
    const launchId = "2";
    const request = {
      params: {
        id: launchId,
      },
      body: launchMockedData.launch2,
    } as Request<{ id: string }>;

    launchServiceMock.get.mockResolvedValue(launchMockedData.launch2);

    launchServiceMock.update.mockResolvedValue();
    const launch = await launchController.update(request, {
      json: () => {},
    } as Response);

    expect(launchServiceMock.update).toHaveBeenCalledTimes(1);
    expect(launchServiceMock.update).toHaveBeenCalledWith(
      parseInt(launchId),
      launchMockedData.launch2
    );
    expect(launchServiceMock.update).toHaveReturned();
    expect(launch).toBeUndefined();
  });

  test("Should delete a launch", async () => {
    const launchId = "2";
    const request = {
      params: {
        id: launchId,
      },
    } as Request<{ id: string }>;
    launchServiceMock.get.mockResolvedValue(launchMockedData.launch2);

    launchServiceMock.delete.mockResolvedValue();
    const launch = await launchController.delete(request, {
      json: () => {},
    } as Response);

    expect(launchServiceMock.delete).toHaveBeenCalledTimes(1);
    expect(launchServiceMock.delete).toHaveBeenCalledWith(parseInt(launchId));
    expect(launchServiceMock.delete).toHaveReturned();
    expect(launch).toBeUndefined();
  });
});

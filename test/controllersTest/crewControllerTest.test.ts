import { CrewServices } from "../../src/service/crewService";
import { Request, Response } from "express";
import { CrewController } from "../../src/controllers/crewController";
import crewMockedData from "../mockedData/crewData";
import crewmanMockedData from "../mockedData/crewmanData";
import { CrewmanServices } from "../../src/service/crewmanService";
import { crewmanController } from "../../src/modules/crewmanModule";

jest.mock("../../src/service/crewService");
jest.mock("../../src/service/crewmanService");

const CrewServiceMock = CrewServices as jest.Mock<CrewServices>;
const CrewmanServiceMock = CrewmanServices as jest.Mock<CrewmanServices>;

describe("CrewServices tests", () => {
  let crewmanServiceMock: jest.Mocked<CrewmanServices>;
  let crewController: CrewController;
  let crewServiceMock: jest.Mocked<CrewServices>;

  beforeEach(() => {
    crewServiceMock = new CrewServiceMock() as jest.Mocked<CrewServices>;
    crewmanServiceMock = new CrewmanServiceMock() as jest.Mocked<CrewmanServices>;
    crewController = new CrewController(
      crewServiceMock,
      crewmanServiceMock
    );
  });

  test("Should return a list of crews", async () => {
    crewServiceMock.getAll.mockResolvedValue(crewMockedData.crewData);

    const crews = await crewController.getAll(
      {} as Request,
      { json: () => {} } as Response
    );
    expect(crewServiceMock.getAll).toHaveBeenCalledTimes(1);
    expect(crews).toEqual(crewMockedData.crewData);
  });

  test("Should return one crew by it's id", async () => {
    const crewId = "2";
    const request = { params: { id: crewId } } as Request<{ id: string }>;

    crewServiceMock.get.mockResolvedValue(crewMockedData.crew2);
    const crew = await crewController.get(request, {
      json: () => {},
    } as Response);
    expect(crewServiceMock.get).toHaveBeenCalledTimes(1);

    expect(crewServiceMock.get).toHaveBeenCalledWith(parseInt(crewId));
    expect(crew).toEqual(crewMockedData.crew2);
  });

  test("Should create a crew", async () => {

    crewmanServiceMock.getSome.mockResolvedValue([crewmanMockedData.crewman1]);
    const request = { body: crewMockedData.crew1 } as Request;
    
    crewServiceMock.create.mockResolvedValue(crewMockedData.crew1);
    const crew = await crewController.create(request, {
      json: () => {},
    } as Response);
    
    expect(crewServiceMock.create).toHaveBeenCalledTimes(1);

    expect(crewServiceMock.create).toHaveBeenCalledWith(
      crewMockedData.crew1
    );
    expect(crew).toEqual(crewMockedData.crew1);
  });

  test("Should update a crew", async () => {

    const crewId = "2";
    const request = { params: { id: crewId,}, body: crewMockedData.crew2, } as Request<{ id: string }>;

    crewServiceMock.get.mockResolvedValue(crewMockedData.crew2);

    crewServiceMock.update.mockResolvedValue();
    crewmanServiceMock.getSome.mockResolvedValue([crewmanMockedData.crewman1, crewmanMockedData.crewman2]);
    const crew = await crewController.update(request, { json: () => {}, } as Response);
    
    expect(crewServiceMock.update).toHaveBeenCalledTimes(1);
    expect(crewServiceMock.update).toHaveBeenCalledWith( parseInt(crewId), crewMockedData.crew2);
    expect(crewServiceMock.update).toHaveReturned();
    expect(crew).toBeUndefined();
  });

  test("Should delete a crew", async () => {
    const crewId = "2";
    const request = {
      params: {
        id: crewId,
      },
    } as Request<{ id: string }>;
    crewServiceMock.get.mockResolvedValue(crewMockedData.crew2);

    crewServiceMock.delete.mockResolvedValue();
    const crew = await crewController.delete(request, {
      json: () => {},
    } as Response);

    expect(crewServiceMock.delete).toHaveBeenCalledTimes(1);
    expect(crewServiceMock.delete).toHaveBeenCalledWith(parseInt(crewId));
    expect(crewServiceMock.delete).toHaveReturned();
    expect(crew).toBeUndefined();
  });
});
